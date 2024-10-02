# Guess the Rank Game

This is a simple web application where users watch a YouTube gameplay clip and guess the rank based on what they see. The app is built using **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Watch YouTube Videos**: Embedded YouTube video player where users can watch gameplay clips.
- **Rank Guessing**: Users can guess the rank of the player based on the clip.
- **Results Page**: Displays the user's guess and the correct rank.
- **Responsive Design**: Built with Tailwind CSS to ensure the app is responsive across devices.

## Technologies Used

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hooks**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/guess-the-rank.git
   cd guess-the-rank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser to see the app.

## How It Works

1. Home Page:

- The user is presented with instructions and a "Start Game" button.
- Clicking the button takes the user to the Game page.

2. Game Page:

- Users can watch a YouTube video and choose from multiple rank options.
- After selecting a rank, they are redirected to the Results page.

3. Results Page:

- Displays the user's guess and the correct rank.

## Customization

To customize the game:

- **Add YouTube Videos**: Replace the YOUR_VIDEO_ID in app/game/page.tsx with the actual YouTube video IDs of gameplay clips.
- **Modify Rank Options**: Change the rank options (e.g., Bronze, Silver, Gold) in the app/game/page.tsx file.
- **Change Correct Rank**: Update the correct rank in the handleGuess function in app/game/page.tsx.

## Deployment

This project is ready to be deployed on platforms like **Vercel**.

1. Push your repository to GitHub.
2. Connect your repository to [Vercel](https://vercel.com) for automatic deployment.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
