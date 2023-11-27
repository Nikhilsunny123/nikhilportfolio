import axios from "axios";

// Function to upload an image to Imgur
export default async function uploadToImgur(fileBuffer) {
    const imgurClientId = 'e74f8b1dace169e'; // Replace with your Imgur client ID

    // Set up the Imgur API endpoint
    const imgurApiEndpoint = 'https://api.imgur.com/3/image';

    // Set up headers for Imgur API request
    const headers = {
        'Authorization': `Client-ID ${imgurClientId}`,
        'Content-Type': 'application/json',
    };

    // Prepare the data to be sent in the request
    const data = {
        image: fileBuffer.toString('base64'),
    };

    // Make a POST request to the Imgur API
    const response = await axios.post(imgurApiEndpoint, data, { headers });

    return response;
}