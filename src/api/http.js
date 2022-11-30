import axios from 'axios';
export const SERVICE_BASE_URL = "https://onlinetoolbackend.herokuapp.com";

const headers = {
	"Accept-Language": "tr-TR"
};

export const HTTP = axios.create({
	baseURL: SERVICE_BASE_URL,
	headers
});
export const EXTERNAL = axios.create();

function successHandler(response) {
	if (response.data != null) {
		return {
			data: response.data,
			error: response.data.error,
			meta: response.data.meta
		};
	} else {
		return Promise.reject(false);
	}
}

function errorHandler(error) {
	if (error.response !== undefined && error.response.data) {
		return Promise.reject({
			data: error.response.data.data,
			error: error.response.data.error,
			meta: error.response.data.meta
		});
	}
}

HTTP.interceptors.request.use(config => config);

HTTP.interceptors.response.use(
	response => successHandler(response),
	error => errorHandler(error)
);
