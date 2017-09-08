# OsteAPI Dokumentation

## Resurser

**GET /cheeses**

Resursen repræsenterer alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON
[{
    "navn": string,
    "pris": number,
    "type": string,
    "farve": string,
    "gram": string,
    "antal": number,
    "smag": string,
    "billede": string,
    "land": string,
    "fedt%": string,
    "producert": string,
    "stregkode": string,
    "varenr": number
},{
    ...
}]
```

**GET /cheeses/\<varenummer>**

Resursen repræsenterer en enkelt ost i kartoteket.
Resursen er formateret på følgende måde:

```JSON
{
    "navn": string,
    "pris": number,
    "type": string,
    "farve": string,
    "gram": string,
    "antal": number,
    "smag": string,
    "billede": string,
    "land": string,
    "fedt%": string,
    "producert": string,
    "stregkode": string,
    "varenr": number
}
```

**POST /login**

Resursen varetager log-ind informationer og returnerer et AccessToken.
Resursens request body er formateret på følgende måde:

```JSON
{
    "username": string,
    "password": string
}
```

Resursens response er formateret på følgende måde:

```JSON
{
    "AccessToken": string
}
```

AccessToken er en 512 bit HEX streng, genereret med randomBytes.