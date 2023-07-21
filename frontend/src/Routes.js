


import { HomePage, ImageToPdf, JpgToPng, NotFoundPage, PdfResize, PdfToImage, PngToJpg } from "Pages";
import { ROUTE_HOME, ROUTE_IMAGE_TO_PDF, ROUTE_JPG_TO_PNG, ROUTE_PDF_RESIZE, ROUTE_PDF_TO_IMAGE, ROUTE_PNG_TO_JPG } from "Store/constants";
import React from "react";
import { Route, Routes as Switch } from "react-router-dom";


const Routes = () => (
    <Switch>
        <Route path={ROUTE_HOME} exact element={<HomePage />} />
        <Route path={ROUTE_IMAGE_TO_PDF} exact element={<ImageToPdf />} />
        <Route path={ROUTE_PDF_TO_IMAGE} exact element={<PdfToImage />} />
        <Route path={ROUTE_PNG_TO_JPG} exact element={<PngToJpg />} />
        <Route path={ROUTE_JPG_TO_PNG} exact element={<JpgToPng />} />
        <Route path={ROUTE_PDF_RESIZE} exact element={<PdfResize />} />
        <Route path="*" element={<NotFoundPage />} />
    </Switch>
);

export default Routes;
