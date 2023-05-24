import express from "express";
import homeController from "../controllers/homeController";
import cameraController from "../controllers/cameraController";
import alertController from "../controllers/alertController";
import areaController from "../controllers/areaController";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHome);
    router.post("/api/login", homeController.handleLogin);

    router.get("/api/get-list-camera", cameraController.handleGetListCamera);
    router.post("/api/add-new-camera", cameraController.handleAddNewCamera);
    router.get("/api/get-camera-by-id", cameraController.handleGetCameraByID);
    router.put("/api/edit-camera-by-id", cameraController.handleEditCameraByID);
    router.delete("/api/delete-camera", cameraController.handleDeleteCamera);

    router.get("/api/get-list-alert", alertController.handleGetListAlert);
    router.post("/api/add-new-alert", alertController.handleAddNewAlert);
    router.get("/api/get-alert-by-id", alertController.handleGetAlertByID);
    router.put("/api/edit-alert-by-id", alertController.handleEditAlertByID);
    router.delete("/api/delete-alert", alertController.handleDeleteAlert);

    router.get("/api/get-list-area", areaController.handleGetListArea);
    router.post("/api/add-new-area", areaController.handleAddNewArea);
    router.get("/api/get-area-by-id", areaController.handleGetAreaByID);
    router.put("/api/edit-area-by-id", areaController.handleEditAreatByID);
    router.delete("/api/delete-area", areaController.handleDeleteArea);

    return app.use("/", router);
}

module.exports = initWebRoutes;