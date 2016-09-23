import fin from 'find-port';
import cos from './import/cos';
/**
 * Represents the native desktop side.
 *
 * @param {Object} log          - Winston logger instance.
 * @param {Object} app          - Reference to the Electron app.
 * @param {Object} appSettings     - settings.json object.
 * @param {Object} systemEvents - Event emitter for listening or emitting events on the desktop
 *                                side.
 * @param {Object} modules      - Reference to all loaded modules.
 * @param {Object} Module       - Reference to Module.
 * @constructor
 */

class Desktop {
    constructor(log, app, appSettings, systemEvents, modules, Module) {
        const desktop = new Module('desktop');
        // From Meteor use this by invoking Electron.send('desktop', 'closeApp');
        desktop.on('closeApp', () => app.quit());
    }
}

module.exports = (...args) => new Desktop(...args);
