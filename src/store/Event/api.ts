import { httpService } from '../../services';

export const getSomeData = () => {
    return httpService.get('/');
};
