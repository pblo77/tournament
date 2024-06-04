
#  Gestión de Torneos de Esports

Bienvenido/a a la plataforma de gestión de torneos de esports. Esta aplicación te permite organizar y administrar eficientemente eventos de esports, así como mantener la información actualizada de tus torneos, jugadores y resultados.

### Funcionalidades Implementadas

#### Gestión de Torneos

- **Crear Torneo**: Utiliza el endpoint `POST /torneos` para crear un nuevo torneo especificando sus detalles.
- **Actualizar Torneo**: Utiliza el endpoint `PUT /torneos/{id}` para actualizar la información de un torneo existente.
- **Eliminar Torneo**: Utiliza el endpoint `DELETE /torneos/{id}` para eliminar un torneo.
- **Consultar Torneo**: Utiliza el endpoint `GET /torneos/{id}` para obtener información detallada de un torneo, incluyendo sus participantes.

#### Gestión de Participantes

- **Agregar Participantes**: Utiliza el endpoint `POST /torneos/{id}/participantes` para agregar participantes a un torneo existente.
- **Consultar Participantes**: Utiliza el endpoint `GET /torneos/{id}/participantes` para obtener la lista de participantes de un torneo.

#### Asignación de Competencia

- **Asignación Aleatoria de Competencia**: Utiliza el endpoint `POST /torneos/{id}/asignar-competencia` para asignar aleatoriamente la competencia de un torneo entre los jugadores inscritos.

#### Gestión de Resultados

- **Registrar Resultados**: Utiliza el endpoint `POST /resultados` para registrar los resultados de una competencia, incluyendo ganador, perdedor y puntajes obtenidos.
- **Consultar Resultados**: Utiliza el endpoint `GET /resultados` para obtener los resultados de los jugadores por torneo, con filtrado mínimo por puntajes (>=), ordenamiento por puntajes y paginación.

#### Gestión de Jugadores

- **Registrar Jugador**: Utiliza el endpoint `POST /jugadores` para registrar un nuevo jugador.
- **Actualizar Jugador**: Utiliza el endpoint `PUT /jugadores/{id}` para actualizar la información de un jugador existente.
- **Consultar Jugador**: Utiliza el endpoint `GET /jugadores/{id}` para obtener los detalles de un jugador específico.

### Uso

Para comenzar a utilizar la plataforma, simplemente sigue la documentación proporcionada para cada endpoint. Asegúrate de tener acceso a la API y los recursos necesarios para realizar las operaciones deseadas. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactar con nuestro equipo de soporte.

¡Disfruta utilizando nuestra plataforma de gestión de torneos de esports!

