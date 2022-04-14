export const constructor = [
  { short: 'gaa', command: 'git add .' },
  { short: 'gcmsg', command: 'git commit -m' },
  { short: 'gp', command: 'git push' },
  { short: 'gp -f', command: 'git push --force' },
  { short: 'gl', command: 'git pull' },
  { short: 'gf', command: 'git fetch' },
  { short: 'grbm', command: 'git rebase ${git_main_branch}' },
  { short: 'grbc', command: 'git rebase --continue' },
  { short: 'grba', command: 'git rebase --abort' },
  { short: 'gst', command: 'git status' },
  { short: 'gb', command: 'git branch' },
  { short: 'gcb', command: 'git checkout -b' },
  { short: 'gco', command: 'git checkout' },
  { short: 'grhh', command: 'git reset --hard' },
  { short: 'gstu', command: 'git stash -u' },
  { short: 'gstp', command: 'git stash pop' },
  { short: 'gstd', command: 'git stash drop' },
  { short: 'grhom', command: 'git reset --hard origin/master' },
  { short: 'acp "message"', command: 'gaa + gcmsg + gp' },
]