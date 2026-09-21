# Git Crew Sync Lab Workflow

## Task 1: Push from Clone A
![Task 1 Screenshot](screenshots_task1.png)

## Task 2: Diverge from Clone B (Rejected Push)
![Task 2 Screenshot](screenshots_task2.png)

## Task 3: Reconcile with a Merge
![Task 3 Screenshot](screenshots_task3.png)

## Task 4: Diverge and Rebase
![Task 4 Screenshot](screenshots_task4.png)

## Task 5: Merge into Main
![Task 5 Screenshot](screenshots_task5.png)

## Task 6: Tagging and Reflection Questions

* **What did the rejected push error message tell you, and why did it happen?**
  The error message told us that our local repository was behind the remote repository on GitHub[cite: 1]. It happened because another clone had already pushed changes to that branch, and Git blocked our push to prevent us from accidentally overwriting their work[cite: 1].

* **What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?**
  When we used a merge (Task 3), Git combined the two diverging histories together and created a special merge commit[cite: 1]. When we used a rebase (Task 4), Git temporarily lifted our new changes off, updated our base to match the latest remote work, and re-applied our changes neatly on top in a straight line without adding extra merge commits[cite: 1].

* **What one habit would have avoided both rejected pushes in this lab?**
  Running a `git pull` or `git fetch` to check for and download any new updates from the team before writing code and trying to push[cite: 1].

* **Which approach – merge or rebase – would you default to on a shared team branch, and why?**
  A merge is usually preferred for a shared team branch because it preserves a clear, honest timeline of who made changes and when, whereas a rebase rewrites history and can confuse teammates working on that same branch[cite: 1].

![Task 6 Screenshot](screenshots_task6.png)