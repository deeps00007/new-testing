document.getElementById("profile").addEventListener("click", function () {
    const profileCard = document.querySelector(".profile-card");
    profileCard.style.display = (profileCard.style.display === "none" || profileCard.style.display === "") ? "block" : "none";
});
// Hide profile card when clicking outside of it
document.addEventListener("click", function (event) {
    const profileCard = document.querySelector(".profile-card");
    const profileButton = document.getElementById("profile");

    // Check if the click was outside the profile card and the profile button
    if (!profileCard.contains(event.target) && !profileButton.contains(event.target)) {
        profileCard.style.display = "none";
    }
});