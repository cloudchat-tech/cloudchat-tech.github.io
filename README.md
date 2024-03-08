# cloudchat-tech

Code for the CloudChat.tech website.

## Development References

- [Hexo Docs](https://hexo.io/docs/)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/templating.html)
- [Tailwindcss Docs](https://tailwindcss.com/docs)

## Dev Container Tips

Ensure that you have git configured correctly to pass along credentials:
[Sharing Git credentials with your container](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials)

If you're using a password manager (like 1Password), you may need to configure
the `SSH_AUTH_SOCK` environment variable to point to the correct location. For
example, 1Password requires this:

```sh
export SSH_AUTH_SOCK=~/Library/Group\ Containers/2BUA8C4S2C.com.1password/t/agent.sock
```

You may want to consider adding that your shell profile (e.g. `~/.bashrc` or
`~/.zshrc`).
