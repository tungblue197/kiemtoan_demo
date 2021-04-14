import http from '../http';
class KienNghiKiemToanService {
    constructor(){
        this.http = http;
    }

    static getAll = async () => {
        return await http.get('Dm_DonVi/GetAll');
    }
}

export default  KienNghiKiemToanService;