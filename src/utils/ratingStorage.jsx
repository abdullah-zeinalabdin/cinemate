export function getAllRatings() {
    return JSON.parse(localStorage.getItem("ratings")) || [];
}

export function saveRating({ id, poster, mediaType, rating }) {
    const ratings = getAllRatings();

    const existingRating = ratings.find((item) => item.id === id);
    const ratingObj = {
        id: id,
        poster: poster,
        mediaType: mediaType,
        rating: rating,
    }
    if (existingRating) {
            existingRating.rating = rating;
    }else {
        ratings.push(ratingObj);
    }

    localStorage.setItem("ratings", JSON.stringify(ratings));
}