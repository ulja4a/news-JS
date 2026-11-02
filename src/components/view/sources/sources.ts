import './sources.css';
import type { NewsSource } from '../../../types';

class Sources {
    draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');

            if (sourceName) {
                sourceName.textContent = item.name;
            }
            const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item');

            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
