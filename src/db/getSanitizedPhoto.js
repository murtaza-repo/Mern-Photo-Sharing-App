import { getPhoto } from './getPhoto';


export const getSanitizedPhoto = async (photoId) => {
    const photo = await getPhoto(photoId);
    delete photo.shareWith;
    return photo;
}