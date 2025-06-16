# YarikOgraf Photo Gallery and Admin Panel

This repository contains the front-end code for the YarikOgraf photo gallery website, including a public-facing gallery and an admin panel for managing content.

## Project Structure

* `index.html`: The main public-facing website, featuring a photo gallery and donation calendar.
* `login.html`: Dedicated login page for administrators.
* `admin.html`: The administration panel for managing gallery items (uploading, editing, deleting photos/videos).
* `buttons.html`: A conceptual page (or snippet) to display "Buy" and "Download" buttons for individual gallery items.
* `style.css`: Custom CSS for general styling, supplementing Tailwind CSS.
* `google5aa42724bdab85c3.html`: Google site verification file.
* `README.md`: This file.

## Technologies Used

* **HTML5:** Structure of the web pages.
* **CSS3:** Styling (with a combination of custom CSS and Tailwind CSS).
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **JavaScript (ES6+):** Client-side interactivity and logic.
* **Firebase:**
    * **Firebase Authentication:** For secure admin login.
    * **Firebase Firestore:** (Planned/Implemented) For storing gallery item metadata (title, description, price, etc.) and potentially donation data.
    * **Firebase Storage:** (Planned/Implemented) For storing photo and video files.
* **WayForPay:** (Integrated as a widget) For processing payments for gallery items.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd my-site
    ```
2.  **Firebase Project Setup:**
    * Go to the [Firebase Console](https://console.firebase.google.com/).
    * Create a new Firebase project.
    * Add a web app to your project.
    * **Crucially, copy your Firebase configuration object (`apiKey`, `authDomain`, `projectId`, etc.).**
    * Enable **Firebase Authentication** (Email/Password provider).
    * Enable **Firestore Database** (start in production mode, set up security rules later).
    * Enable **Cloud Storage for Firebase**.
3.  **Update Firebase Configuration:**
    * Open `index.html`, `login.html`, and `admin.html`.
    * Locate the `const firebaseConfig = { ... };` block in each file.
    * **Replace all placeholder values (e.g., `YOUR_API_KEY`, `YOUR_PROJECT_ID`) with your actual Firebase project configuration values.**
4.  **Google Site Verification:**
    * If using Google Search Console, replace `YOUR_UNIQUE_GOOGLE_VERIFICATION_CODE` in `index.html` with your actual code.
    * Ensure `google5aa42724bdab85c3.html` is in the root directory of your deployed website.
5.  **Admin User Setup:**
    * In Firebase Authentication, manually add an admin user (e.g., `yarikphoto26@gmail.com`) with a strong password. **Remember that the admin email is currently hardcoded in `login.html` and `admin.html`. For production, consider storing admin UIDs in Firestore or using Firebase Custom Claims for better security.**
6.  **WayForPay Integration (Optional/Advanced):**
    * If you plan to use WayForPay, you'll need a merchant account.
    * Replace placeholder WayForPay parameters in `admin.html` (if uncommenting the widget initialization) and ensure you handle payment callbacks securely on your server (WayForPay often uses a server-to-server callback). The current `buttons.html` and `admin.html` provide only client-side placeholders.

## Usage

* Open `index.html` in your web browser to view the main gallery.
* Navigate to `login.html` to access the admin login.
* After logging in with the admin credentials, you will be redirected to `admin.html` to manage gallery items.

## Future Improvements / To-Do

* **Robust Admin Authentication:** Implement Firebase Custom Claims or store admin UIDs in Firestore for more secure admin access.
* **Payment Integration:** Fully integrate WayForPay (or another payment gateway) with server-side logic for secure payment processing and updating item `paid` status.
* **Public Gallery Display:** Create a public gallery page (`gallery.html` or integrate into `index.html`) that fetches and displays items from Firestore for users to browse and purchase/download.
* **User Accounts (Optional):** Allow non-admin users to create accounts to manage their purchased items.
* **Error Handling and UI Feedback:** Enhance user feedback for form submissions, uploads, and errors.
* **Image Optimization:** Implement image compression and responsive image loading for better performance.
* **Styling Consistency:** Ensure consistent styling across all pages, especially given the mix of Tailwind and custom CSS.
* **Calendar Functionality:** Connect the calendar in `index.html` to actual donation data in Firestore.

## Contributing

Feel free to open issues or submit pull requests.
