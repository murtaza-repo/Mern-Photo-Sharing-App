import { getSharedPhotosForUser } from '../db';

export const getSharedWithMePhotosRoute = {
    method: 'get',
    path: '/shared',
    handler: async (req, res) => {

        const photos = await getSharedPhotosForUser(req.user.uid);
        res.status(200).json(photos);
    }
}