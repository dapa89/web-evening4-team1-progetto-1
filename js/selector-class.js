class FooterSelector {
    constructor(selector, dataArray, listType) {
        this.selector = selector;
        this.label = selector.querySelector('span') || selector;
        this.dataArray = dataArray;
        this.listType = listType;
        this.listContainer = document.createElement('div');
        
        this.renderList();
        this.selector.appendChild(this.listContainer);
        this.addEventListeners();
    }

    renderList() {
        this.listContainer.classList.add('countries-dropdown', 'hidden');
        this.dataArray.forEach(text => {
            const item = document.createElement('div');
            item.classList.add('country-item');

            if (this.listType === "Lingua") {
                const flag = document.createElement('span');
                flag.classList.add('flag');
                
                const flagName = text.toLowerCase().split(' ').join('-');
                flag.classList.add('flag-' + flagName);
                
                item.appendChild(flag);
            }

            
            const name = document.createElement('span');
            name.textContent = text;
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
                if (el !== this.listContainer) {
                    el.classList.add('hidden');
                }
            });

            this.listContainer.classList.toggle('hidden');
        };

        
        document.addEventListener('click', () => this.close());
    }

    close() {
        this.listContainer.classList.add('hidden');
    }
}