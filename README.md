# Zadania z Logiki

Wszystkie zadania zostały wykonane przy użyciu języka JavaScript

---

## Instrukcje

Zadania umieszczone są w folderach o nazwie `rozdzial_<1-3>` <br/>
Każde zadanie jest opisane przy użyciu komentarzy oraz funckji `console.log`, wszystkie wyniki znajdują się w konsoli przeglądarki.

- otwórz plik index.html w przeglądarce 
- otwórz narzędzia developerskie i odpal konsole
- jeśli chcesz sprawdzić wynik z innymi danymi wejściowymi patrz niżej

Przykładowe zadanie ze zmianą danych wejściowych:

```
// Zadanie 1_2 Napisz program sumujący liczby parzyste –liczba (-50) konczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function addEvenNumbers(number) {
  let counter = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0 && i < 50) {
      counter = counter + i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 1_2: ');
console.log(addEvenNumbers(60));
```

`console.log(addEvenNumbers(60));` -> zmieniamy parametry wywołanej funkcji w tym miejscu na np. `console.log(addEvenNumbers(100));`