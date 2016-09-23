import moduleJson from './module.json';

/**
 * @param {Object} log - Winston logger instance.
 * @param {Object} app - Reference to the Electron app.
 * @param {Object} settings - settings.json object.
 * @param {Object} systemEvents - Event emitter for listening or emitting events on the desktop
 *                                side.
 * @param {Object} modules - Reference to all loaded modules.
 * @constructor
 */
function VolumeModule(log, app, appSettings, systemEvents, modules, settings, Module) {
}

module.exports = VolumeModule;
