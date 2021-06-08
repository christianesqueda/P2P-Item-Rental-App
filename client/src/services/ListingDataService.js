import http from "../http-common";

class ListingDataService {
    getAll() {
        return http.get("/listings");
    }
    get(userId) {
        return http.get(`/listings?userId=${userId}`); 
    }

    create(data) {
        return http.post("/listings", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          });
    }

    update(id, data) {
        return http.put(`/listings/${id}`, data);
    }

    delete(id) {
        return http.delete(`/listings/${id}`);
    }

    deleteAll() {
        return http.delete(`/listings`);
    }


}

export default new ListingDataService();