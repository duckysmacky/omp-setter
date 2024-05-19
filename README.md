# Oh-My-Posh Setter

A tool for quickly switching Oh-My-Posh themes for Powershell. Basically just a shortcut to just editing the `$PROFILE` and entering the wanted theme manually.

## Install

```bash
npm install omp-setter
```

## Usage

1. Select a theme of your choice (run `Get-PoshThemes` for a full list of themes) and run the command to set it in your Powershell `$PROFILE`

```bash
ompset <THEME NAME>
```

2. Apply changes to profile
```bash
. $PROFILE
```

3. Done!