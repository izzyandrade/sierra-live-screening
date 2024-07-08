import { NextFunction, Request, Response, Router } from "express";
import { getInvalidFieldForListing } from "../utils/validateListing"

export interface Listing {
    id: string;
    title: string;
    price: number;
    description: string;
}

const listings = [
    {
        id: "001",
        title: "First Listing",
        price: 10,
        description: "This is the first listing"
    }
]

const listingsRouter = Router();

listingsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(listings)
})

listingsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("body", req.body)
    const newListing = req.body;
    const invalidField = getInvalidFieldForListing(newListing);
    if (!invalidField) {
        if (listings.find(listing => listing.id === newListing.id)) {
            res.status(400).send("A listing with this ID already exists")
        }
        listings.push(newListing); 
        res.status(200).send(newListing)
    } else {
        res.status(400).send(`Invalid body for creating a new listing: variable ${invalidField} has wrong type`)
    }
})

listingsRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const listingIdToDelete = req.params.id.toString();
    const indexToDelete = listings.findIndex(listing => listing.id === listingIdToDelete);
    if (indexToDelete !== -1) {
        const deletedListing = listings.splice(indexToDelete, 1);
        res.status(200).send(deletedListing);
    } else {
        res.status(400).send("This listing does not exist!")
    }
})

export default listingsRouter;