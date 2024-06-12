import axios from 'axios';

// Send a GET request to the specified URL to retrieve filter data
const fetchFilters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/filters');
      return response.data;
    } catch (error) {
      console.error('Error fetching filters:', error);
      return [];
    }
  };

  export default fetchFilters;