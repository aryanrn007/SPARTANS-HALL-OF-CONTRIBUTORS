# Hall of PRs

Your first PR is not code. It’s confidence.

This is a beginner-friendly open source project designed to help students make their first-ever Pull Request in just a few minutes.

✨ Contribute → See your name live on a website → Share your achievement

🎯 What is this?
This project is a sandbox for beginners where you can:

- Make your first Pull Request
- Learn how GitHub actually works
- See your name live on a real website
- Share your achievement on LinkedIn 🚀

🧠 Why this matters
Most students:
- Learn Git theoretically ❌
- But never actually use it ❌

This project helps you:
Turn knowledge into action.

⚡ How to Contribute (Step-by-Step)
1. Fork this repository
Click the Fork button (top right)

2. Clone your fork
```bash
git clone https://github.com/YOUR-USERNAME/Hall-of-PRs.git
```

3. Open in VS Code
```bash
cd Hall-of-PRs
```

4. Add your card
Go to the file `index.html`.
Copy this template:

```html
   <div class="card">
            <div class="badge">
                <div class="medal"><span class="number">1</span></div>
                <p class="badge-text">FIRST PR</p>
            </div>

            <h2 class="name">YOUR NAME</h2>
            <p class="bio">YOUR BIO (refer: ChooseYourBio.txt for more options, keep it to 12 words for best design)</p>
            <p class="credit">#FirstPR with Parul Prashar</p>
            <button class="celebrate-btn" onclick="showPopup()">
              Celebrate 🎉
            </button>
    </div>
```

👉 Paste it at the correct place (inside the `<div class="cards-grid">`) and replace:
- Your Name
- Your one-liner (you may refer to file ChooseYourBio.txt)

5. Commit your changes
```bash
git add .
git commit -m "Added my first PR 🎉"
git push origin main
```

6. Create Pull Request
Go to your fork on GitHub
Click Compare & Pull Request
Add a small message
Submit 🚀

🧩 Important Notes
Keep your bio short (10–12 words)
Do not modify other people’s cards
Don’t worry about merge conflicts — I’ll handle them
