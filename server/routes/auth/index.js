import {Router} from "express";
import {signUp, signIn, resetPassword} from "./controllers";
import {check} from "express-validator";

const router = Router();

/**
 * @swagger
 * /v1/api/auth/sign-up:
 *   post:
 *     tags:
 *       - Auth
 *     description: Sign-up in app
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
 *       - password: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *       - re_password: id
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
router.post('/sign-up',
[
  check("email", "Email isn't correct").isEmail(),
  check("password", "Min length of password is 6").isLength({min:6})
], 
signUp)

/**
 * @swagger
 * /v1/api/auth/sign-in:
 *   post:
 *     tags:
 *       - Auth
 *     description: Sign-in your profile
 *     produces:
 *       - application/json
 *     parameters:
 *       - email: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *       - password: id
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
router.post('/sign-in',
[
  check("email", "Enter correct email").normalizeEmail().isEmail(),
  check("password", "Enter password").exists()
], 
signIn)

router.post('/reset-password', resetPassword)

export default router;