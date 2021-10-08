const Alias = () => {
  return (
    <div className="dfc">
        <span className="mb15">Settings:</span>
        <span className="mb15"> type in console 'nano ~/.zshrc'</span>

        <span>Add in the end:</span>
        <ul>
          <li>
            <pre>{`[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh`}</pre>
            
          </li>
          <li>
            <pre>{`alias grbm='git rebase origin/\${git_main_branch}`}</pre>
          </li>
          <li>
            alias gstu='git stash -u'
          </li>
          <li>
            <pre>{`acp() { gaa && gcmsg && "$@" && gp }`}</pre>
          </li>
        </ul>
        <span>Then: ctrl+O, Enter, ctrl+X</span>

        <div className="mt30">Alias list:</div>
        <ul>
          <li>gaa - 'git add .'</li>
          <li>gcmsg - 'git commit -m'</li>
          <li>gp - 'git push'</li>
        </ul>
    </div>
  )
}

export default Alias;