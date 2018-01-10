import "zone.js";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "reflect-metadata";

window.onload = async () => {
    const anyWindow = window as any;
    anyWindow.$ = await import("jquery");
    anyWindow.jQuery = anyWindow.$;
    anyWindow.Popper = await import("popper.js");
    anyWindow._popper = anyWindow.Popper;
    anyWindow.Popper.Defaults = { modifiers: { computeStyle: {} } };
    anyWindow.bootstrap = await import("bootstrap");
}

