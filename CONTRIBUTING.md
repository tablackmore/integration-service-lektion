## <a name="committing-code"></a> Committing code to the repository

DATABASE DUMPS, PRODUCTION PASSWORDS AND SENSITIVE DATA ARE FORBIDDEN FROM BEING COMMITED INTO THE REPO.

### Commit Message Format

Commit messages are made in English.

The concept behind the commit strategy is taken from [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
Each commit message consists of a header, a body and a footer. The header has a special format that includes a type and a subject:

```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

### The Firstline

<a name="commit-types"></a> The following are allowed as commit types:

* `feat:` A new feature
* `fix:` A bug fix
* `build:` Changes that affect the build system or external dependencies e.g. .net framework bump
* `ci:` Changes to our CI configuration files and scripts e.g. adding or changing circleci or travis scripts
* `docs:` Documentation only changes
* `perf:` A code change that improves performance
* `refactor:` A code change that neither fixes a bug nor adds a feature
* `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* `test:` Adding missing tests or correcting existing tests

The subject and wording of the commit message should be instructional and concise. It should be all lowercase and a trailing "`.`" should not be included.

e.g.

```
feat: allow provided config object to extend other configs
```

and not

```
feat: allows the provided config object to extend other configs
```

The body is optonal and used to describe when necessary the details of the commit.

The footer should contain a closing reference to an issue if any.

### Breaking changes in commits

BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

or

```
refactor!: drop support for Node 6
```

## Pull requests

Each pull requests should have a purpose with all commits within the branch aligning with that common purpose.

Prior to creating a PR, update the branch you are working on by rebasing it on develop.

``` bash
git rebase develop -i
git push -f
```

In GitHub, send a pull request to develop.

If we suggest changes then:
Make the required updates.

Rebase your branch and force push to the GitHub repository (this will update your Pull Request):

``` bash
git rebase develop -i
git push -f
```

That's it! Thank you for your contribution!

### Merging pull requests

Pull requests should be merged by a member of Eskilstuna's development team.

The following process should be followed. If conflicts exist ask the PR's creator to fix the conflicts via an interactive rebase.

``` bash
git rebase develop -i
git push -f
```

After reviewing and accepting the PR the branch should be brought upto date via a rebase on develop.

The resulting clean rebase should be pushed to the branch.

There is one strategy in github for merging with develop. `Squash merge`.

* `Squash merge` should be used in the majority of cases and careful consideration should be made to final commit message.