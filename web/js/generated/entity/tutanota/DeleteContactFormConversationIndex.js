"use strict";

tutao.provide('tutao.entity.tutanota.DeleteContactFormConversationIndex');

/**
 * @constructor
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex = function(parent, data) {
  if (data) {
    this.updateData(parent, data);
  } else {
    this.__id = tutao.entity.EntityHelper.generateAggregateId();
    this._items = null;
  }
  this._parent = parent;
  this.prototype = tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype;
};

/**
 * Updates the data of this entity.
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.updateData = function(parent, data) {
  this.__id = data._id;
  this._items = data.items;
};

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.toJsonData = function() {
  return {
    _id: this.__id, 
    items: this._items
  };
};

/**
 * Sets the id of this DeleteContactFormConversationIndex.
 * @param {string} id The id of this DeleteContactFormConversationIndex.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.setId = function(id) {
  this.__id = id;
  return this;
};

/**
 * Provides the id of this DeleteContactFormConversationIndex.
 * @return {string} The id of this DeleteContactFormConversationIndex.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.getId = function() {
  return this.__id;
};

/**
 * Sets the items of this DeleteContactFormConversationIndex.
 * @param {string} items The items of this DeleteContactFormConversationIndex.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.setItems = function(items) {
  this._items = items;
  return this;
};

/**
 * Provides the items of this DeleteContactFormConversationIndex.
 * @return {string} The items of this DeleteContactFormConversationIndex.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.getItems = function() {
  return this._items;
};
/**
 * Provides the entity helper of this entity.
 * @return {tutao.entity.EntityHelper} The entity helper.
 */
tutao.entity.tutanota.DeleteContactFormConversationIndex.prototype.getEntityHelper = function() {
  return this._parent.getEntityHelper();
};