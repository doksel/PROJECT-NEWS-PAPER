import {Router} from "express";
import { me, editProfile } from "./controllers";

const router = Router();

/**
 * @swagger
 * /v1/api/me:
 *   get:
 *     tags:
 *       - Me
 *     description: Get your profile
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: User data
 *       401:
 *         description: Get failed, user not authorized.
 *       404:
 *         description: Get failed, entity not found.
 */
router.get('/', editProfile),

/**
 * @swagger
 * /v1/api/me/edit:
 *   put:
 *     tags:
 *       - Me
 *     description: Edit your profile
 *     produces:
 *       - application/json
 *     parameters:
 *       - firstName: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *       - laststName: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *       - email: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Updated certification
 *       401:
 *         description: Update failed, user not authorized.
 *       404:
 *         description: Update failed, entity not found.
 *       400:
 *         description: Update failed, validate exception.
 */
router.put('/edit', me )


export default router;