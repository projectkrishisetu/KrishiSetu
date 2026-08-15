# 🚨 KrishiSetu — Mandatory Git & GitHub Rules for All Team Members

To keep our codebase clean, avoid code loss, and maintain professional collaboration standards, **ALL team members MUST strictly follow these rules.**

---

## 📌 RULE #1: ALWAYS PULL BEFORE YOU START WORKING

Before writing or editing **ANY** code, you MUST pull the latest changes from GitHub.

```bash
git pull origin main
```

> ⚠️ **Why?** If someone else pushed their work and you start coding without pulling, you will create unnecessary merge conflicts!

---

## 📌 RULE #2: ALWAYS PUSH YOUR WORK WHEN DONE

Never leave code on your local computer without pushing it to GitHub at the end of your coding session.

```bash
git add .
git commit -m "feat: add buyer order tracking status component"
git push origin main
```

---

## 📌 RULE #3: PROPER COMMIT MESSAGES ARE MANDATORY

Do NOT write vague commit messages like `"updated files"`, `"asdf"`, or `"done"`.

Use **Conventional Commit Prefix**:

| Prefix | Use Case | Example |
| :--- | :--- | :--- |
| `feat:` | Adding a new feature or component | `git commit -m "feat: add mandi price search filter"` |
| `fix:` | Fixing a bug or layout error | `git commit -m "fix: resolve mobile navbar overflow"` |
| `docs:` | Updating documentation or markdown files | `git commit -m "docs: update team git workflow rules"` |
| `style:` | CSS, Tailwind formatting, spacing tweaks | `git commit -m "style: update hero section background color"` |
| `refactor:` | Cleaning code without changing functionality | `git commit -m "refactor: optimize supabase server client"` |
| `chore:` | Updating dependencies, config files, gitignore | `git commit -m "chore: add supabase packages to package.json"` |

---

## 📌 RULE #4: IF YOU DON'T KNOW OR ENCOUNTER CONFLICTS — ASK ON MEET IMMEDIATELY!

> 💬 **Hindi / Hinglish Note:**
> *"Agar git commit, push, pull ya merge conflict samajh nahi aa raha hai, to direct Meet pe aake pucho! Par galat push mat karo aur bina push kiye mat chhoodo. Git workflow MANDATORY hai!"*

* If you get a **Merge Conflict** error: **DO NOT FORCE PUSH (`git push -f`)!**
* Immediately join the team **Google Meet** or message the group to resolve it together.

---

## 💡 Quick Daily Cheat Sheet for Team Members

```bash
# Step 1: Start of Day (PULL)
git pull origin main

# Step 2: Write your code & test

# Step 3: Check what you changed
git status

# Step 4: Stage your changes
git add .

# Step 5: Commit with clear description
git commit -m "feat: add farmer crop listing form"

# Step 6: End of Day (PUSH)
git push origin main
```

---

*Strict compliance is required from all project contributors.* 🌾
