class FooterSelector {
    constructor(dataArray, selectorId, listId, labelId) {
        this.dataArray = dataArray;
        this.selector = document.getElementById(selectorId);
        this.listContainer = document.getElementById(listId);
        this.label = document.getElementById(labelId);
        this.init();
    }

    init() {
        if (!this.selector || !this.listContainer) return;
        this.renderList();
        this.addEventListeners();
    }

    renderList() {
        this.dataArray.forEach(text => {
            const item = document.createElement('div');
            item.classList.add('country-item');
            
            
            const flag = document.createElement('span');
            flag.classList.add('flag');
            const flagClass = `flag-${text.toLowerCase().replace(/\s+/g, '-')}`;
            flag.classList.add(flagClass);

            const name = document.createElement('span');
            name.textContent = text;

            item.appendChild(flag);
            item.appendChild(name);
            
            item.onclick = (e) => {
                e.stopPropagation();
                this.label.textContent = text;
                this.close();
            };
            this.listContainer.appendChild(item);
        });
    }

    addEventListeners() {
        this.selector.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.countries-dropdown').forEach(el => {
                if (el !== this.listContainer) el.classList.add('hidden');
            });
            this.listContainer.classList.toggle('hidden');
        };
        
        document.addEventListener('click', () => this.close());
    }

    close() {
        this.listContainer.classList.add('hidden');
    }
}