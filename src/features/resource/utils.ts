// LOCAL FILES
// Interfaces & Types
import type { Resource, Resources } from "features/resource/types";

/**
 * Simple function to merge two resource objects together into a new object.
 */
export const mergeResources = (
  resources1: Resources,
  resources2: Resources,
): Resources => {
  const mergedResources = { ...resources1 };
  (Object.keys(resources2) as Resource[]).forEach((resource) => {
    mergedResources[resource] += resources2[resource];
  });
  return mergedResources;
};
