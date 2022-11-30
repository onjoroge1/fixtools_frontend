import { HTTP } from '../http';
import recourse from '../recourse-service';

const api = {
    getWordDocument: (param) => HTTP.get(`${recourse.defaultService}/convertFromPDF?filename=` + param),
};

export default api