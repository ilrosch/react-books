import {Review} from "../Review/Review";

export const Reviews = ({book}) => {
  return <div>
    {
      book.map((review) => <Review key = {review.id} review = {review}/>)
    }
  </div>
}