import AppLoader from './appLoader';
import type { ResponseCallback } from '../../types';

class AppController extends AppLoader {
    getSources(callback: ResponseCallback): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: ResponseCallback): void {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!(target instanceof HTMLElement) || !(newsContainer instanceof HTMLElement)) {
            return;
        }

        while (target instanceof HTMLElement && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId === null) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
