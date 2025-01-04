document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Merr të dhënat nga forma
    const reviewText = document.getElementById('review-text').value;
    const reviewRating = document.getElementById('review-rating').value;
  
    // Shto review në listë
    const reviewList = document.getElementById('reviews-list');
    const newReview = document.createElement('div');
    newReview.className = 'review-item';
    newReview.innerHTML = `
      <p><strong>Rating:</strong> ${reviewRating}/5</p>
      <p>${reviewText}</p>
    `;
  
    reviewList.appendChild(newReview);
  
    // Pastro formularin
    document.getElementById('review-form').reset();
  });
  