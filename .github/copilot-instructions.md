<!-- GitHub Copilot / AI agent instructions for the 'web2' repository -->
# Quick instructions for AI coding agents

Repository snapshot
- Repo: `web2` (owner: SENPIEMAN), branch: `main`
- Current discoverable files: `LICENSE` at repository root. No source tree, build files, or README were found.

What I (the agent) should assume
- Do not assume a language, framework, or build system. This repository currently contains no source files or build metadata. If you need to act (add tests, build, run), ask the human for the intended language and repo layout first.

Primary objectives when opening an issue/PR
- If the user asks for feature work, ask where the source lives (subfolder, another repo, or missing). Example question: "Where are the app sources (e.g. `src/`, `app/`, `package.json`, `pyproject.toml`, `pom.xml`)?"
- If the user wants a scaffold, create minimal, well-documented scaffolding and clearly state assumptions (language, package manager, test framework). Prefer tiny, focused commits and include a README describing how to run the scaffold.

How to discover project details (automated checks you should run)
- Search the repo root for common files in this order: `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `setup.py`, `pom.xml`, `build.gradle`, `go.mod`, `Cargo.toml`, `Makefile`, `Dockerfile`.
- If none are present, look for top-level directories named `src`, `app`, `server`, `frontend`, or `backend`.

Conventions for edits and PRs
- Use the `main` branch as the default protected branch. Create a short-lived feature branch named `ai/brief-description` for each change.
- Keep each change minimal and self-contained. Include a concise PR description that lists: what changed, why, how to test.

What to include in a created scaffold or sample
- Minimal README with: how to install deps, how to run, how to run tests, and how to lint (if applicable).
- A single minimal test that can run quickly (unit test or smoke test) and demonstrates the run flow.

When tests/build commands are unknown
- Don’t guess exact commands. Instead, add a small `DETECT.md` or inline `README` note explaining which files to add or the commands the maintainer should confirm. Example text to add in a PR:
  - "I couldn't find a build manifest; please confirm if this is a Node, Python, Java, or other project. Once confirmed I will: add `package.json` + `npm test` (Node) or `pyproject.toml` + `pytest` (Python)."

Integration, external services, and credentials
- No integrations or secrets were discoverable. Do not add credentials or attempt network calls. If needed, ask the user to provide connection details and where they expect secrets to be stored (GitHub secrets, .env, vault).

Examples from this repo (explicit references)
- `LICENSE` — the only present file. Because source and build files are missing, prefer discovery questions to speculative edits.

When to escalate to the human
- If you need to pick frameworks, package managers, CI, or deployment targets, stop and ask the user. Provide 2 short options (for example: Node+npm or Python+pip/poetry) with pros/cons for this repository's goals.

Checklist before opening a PR
1. Repo layout discovered and described in the PR body.
2. Any added files include a one-paragraph rationale and a short test or smoke-check.
3. No secrets or credentials committed.

If this file looks incomplete
- This file was generated because no README or AI instructions were found. Please reply with the project language and where source files live (or push the source) and I will regenerate more specific instructions and examples.

— End of instructions —
