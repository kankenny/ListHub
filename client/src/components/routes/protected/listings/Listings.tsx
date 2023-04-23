import DisputedListings from "./DisputedListings"
import UnsoldListings from "./UnsoldListings"
import ListingsToFulfill from "./ListingsToFulfill"
import SoldListings from "./SoldListings"
import AllListings from "./AllListings"
import ListingsOverview from "./ListingsOverview"

const Listings = () => {
  return (
    <div className="flex flex-col w-full p-5 gap-10 text-xl">
      <ListingsOverview />
      <ListingsToFulfill />
      <DisputedListings />
      <SoldListings />
      <UnsoldListings />
      <AllListings />
    </div>
  )
}

export default Listings