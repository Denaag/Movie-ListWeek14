import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = { //star colors
  orange: '#FFBA5A',
  gray: '#a9a9a9'
}

const RateThisFilm = () => {

  const stars = Array(5).fill(0);
  //to save the current rating value - have to give a default value of zero
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const [reviews, setReviews] = useState({}); // this useState says I want it to be an object
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  //sequence of the flow of my review
  const handleClick = value => {
    setCurrentValue(value);
    console.log(currentValue)// shows me the value of each star level
  };

  const handleReviewChange = e => { // handles my review changes
    let textAreaData = e.target.value;// this give my variable a meaningful name - easier to read
    setComment(textAreaData)
    console.log(comment)
  }

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = value => {
    setHoverValue(undefined);
  };

  const handleEditReview = () => {
    setIsSubmitted(!isSubmitted);
  }

  const handleDeleteReview = () => {
    /// reset the data
    setIsSubmitted(false);
    setCurrentValue(0);
    setReviews({});
    setComment('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!(currentValue && comment)) return; //validation
    setReviews({ starRating: currentValue, reviewComment: comment }); /// we don't need to use this state value, because we have use values directly
    console.log(reviews.reviewComment)
    setIsSubmitted(true);
    // console.log("test works")

  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={isSubmitted ? { display: 'none' } : { display: 'block' }}>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (

              <FaStar
                key={index}
                size={24}
                //   onChange={handleStarChange}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey} //allows stars to highlight color once hovered over
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />

            )
          })}

        </div>


        <textarea onChange={handleReviewChange}
          placeholder="Review Film?"
          style={styles.textarea}
          value={comment}
        />

        <button style={styles.button} type="submit">Submit</button>
      </form >
      <div style={!isSubmitted ? { display: 'none' } : { display: 'block' }}>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (

              <FaStar
                key={index}
                size={24}
                //   onChange={handleStarChange}
                color={(currentValue) > index ? colors.orange : colors.grey} //allows stars to highlight color once hovered over
                style={{
                  marginRight: 10,
                }}
              />
            )
          })}
          {/* edit icon */}

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=
            "bi bi-pen-fill" viewBox="0 0 16 16" style={styles.reviewIcon} onClick={handleEditReview}>
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
          {/* delete icon */}
       
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"  style={styles.reviewIcon} onClick={handleDeleteReview}>
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </div>
        <div style={styles.reviewComment}>
          {comment}
        </div>
      </div>
    </div >
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 280,
    marginTop: 40,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 270,
    padding: 10,
    cursor: 'pointer'
  },
  reviewComment: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 280,
    marginTop: 40,
    backgroundColor: 'white',
    color: 'black',
    opacity: 1
  },

  reviewIcon: {
    marginLeft: '20px',
    marginTop: '5px',
    cursor: 'pointer'
  }

};



export default RateThisFilm;





// const [rating, setRating] = useState(null); //allows us to get rating and then set rating because of useState hook
// const [hover, setHover] = useState(null);

// return (
//     <div>
//         {[...Array(5)].map((star, i) => {
//             const ratingValue = i + 1;

//             return (
//                 <label>
//                     <input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
//                     <FaStar className="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={30}
//                     onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}  />
//                 </label>
//             );
//         })}
//     </div>
// );