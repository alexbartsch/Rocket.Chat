import { Meteor } from 'meteor/meteor';

export const rolesStreamer = new Meteor.Streamer('roles');
rolesStreamer.allowWrite('none');
rolesStreamer.allowRead('logged');
