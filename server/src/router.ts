import express from "express";
import activityActions from "./modules/activity/activityActions";
import sportActions from "./modules/sport/sportActions";
import userActions from "./modules/user/userActions";
import participationActions from "./modules/participation/participationActions";
import messageActions from "./modules/message/messageActions";
import authActions from "./modules/auth/authActions";

const router = express.Router();

// routes publiques
router.get("/api/sports", sportActions.browse);

router.get("/api/users", userActions.readByEmail);
router.post("/api/users", userActions.validate, userActions.add);

router.get("/api/activities/:id", activityActions.read);

router.get("/api/participants", participationActions.browseByActivity);

router.get("/api/me", authActions.verifyToken, userActions.read);
router.post("/api/login", authActions.logIn);
router.post("/api/logout", authActions.logout);

// routes semi-protégées (change de comportement en fonction de l'état de connexion)
router.use(authActions.verifyToken);

router.get("/api/activities", activityActions.browse);

// routes protégées (nécessite la connexion)
router.use(authActions.requireAuth);

router.get("/api/profile", userActions.read);

router.post("/api/activities", activityActions.add);
router.get("/api/me/activities", activityActions.browseMine);

router.get("/api/participations", participationActions.browseUserActivity);
router.post(
  "/api/participations",
  activityActions.verifyNbAvaiableSpots,
  participationActions.add,
);
router.put(
  "/api/participations",
  activityActions.verifyNbAvaiableSpots,
  participationActions.editStatus,
);

router.post("/api/message", messageActions.add);
router.post("/api/message/likes", messageActions.addLike);
router.get("/api/message", messageActions.browse);
router.get("/api/message/poll", messageActions.poll);
router.put("/api/message/delete", messageActions.deleteMessage);

export default router;
