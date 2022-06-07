import { getPhotosForUser } from '../db';

export const getMyPhotosRoute = {
    method: 'get',
    path: '/my-photos',
    handler: async (req, res) => {

        const photos = await getPhotosForUser(req.user.uid);
        res.status(200).json(photos);
    }
}