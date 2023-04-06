import express from "express"

// auth controller
import {
  createListing,
  deleteListing,
  updateListing,
  fetchListing,
  fetchListings,
  fetchListingsByCategory,
  fetchTrendingListings,
} from "../controllers/listingController"

const ListingRoute = express.Router()

// Create listing
ListingRoute.post("/post", createListing)

// Delete listing
ListingRoute.delete("/delete/:listingId", deleteListing)

// Update listing
ListingRoute.put("/update/:listingId", updateListing)

// Fetch specific listing
ListingRoute.get("/fetch/:listingId", fetchListing)

// Fetch all listings
ListingRoute.get("/fetch", fetchListings)

// Fetch listings by category
ListingRoute.get("/fetch-by-category/:category", fetchListingsByCategory)

// Fetch trending listings
ListingRoute.get("/fetch-by-trending", fetchTrendingListings)

export default ListingRoute
