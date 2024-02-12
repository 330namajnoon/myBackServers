#!/bin/bash
# Agrega todos los cambios al staging area de Git
git add .

# Crea un commit con un mensaje que incluye la fecha y hora actual
commit_message="Commit realizado el $(date +'%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"

# Hace push de los cambios al repositorio remoto
git push