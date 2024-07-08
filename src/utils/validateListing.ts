import { Listing } from "src/routes/listingsRouter";

export function getInvalidFieldForListing(listing: Partial<Listing>) {
    if (typeof listing.title !== 'string') return "title"
    if (typeof listing.description !== 'string') return "description"
    if (typeof listing.price !== "number") return 'price';
    if(typeof listing.title !== "string") return "title"
    return ""; 
}