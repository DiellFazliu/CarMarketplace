
        $(document).ready(function () {
    function renderFavorites() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const favoritesContainer = $("#favorites-container");
        favoritesContainer.empty(); 

        if (favorites.length === 0) {
            favoritesContainer.html("<p>No cars in your favorites.</p>");
        } else {
            favorites.forEach(carId => {
                const car = cars.find(c => c.id === carId);
                if (car) {
                    const carCard = `
                        <div class="car-card" style="border: 1px solid #ddd; padding: 10px; width: 480px; border-radius: 5px; text-align: center;">
                            <img src="${car.image}" alt="${car.brand} ${car.model}" style="width: 100%; height: auto; border-radius: 5px;">
                            <h3>${car.brand} ${car.model}</h3>
                            <p>Price: ${car.price}</p>
                            <button class="remove-from-favorites-btn" data-id="${car.id}" style="background: red; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remove</button>
                        </div>
                    `;
                    favoritesContainer.append(carCard);
                }
            });
        }
    }

    $(".trigger-favorites").click(function (e) {
        e.preventDefault();
        renderFavorites();
        $("#favorites-modal").show();
        $("#overlay").show();
    });

    $("#close-favorites, #overlay").click(function () {
        $("#favorites-modal").hide();
        $("#overlay").hide();
    });

    $("#favorites-container").on("click", ".remove-from-favorites-btn", function () {
        const carId = $(this).data("id");
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter(id => id !== carId); 
        localStorage.setItem("favorites", JSON.stringify(favorites)); 
        renderFavorites();
    });
});
