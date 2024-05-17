import { expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { Docter } from "../abstracts/export-models";
import HelloWorld from '../pages/HelloWorld';
import CreateDocterForm from '../pages/CreateDocterForm';
import { randomInt } from 'crypto';

test(
  "Test fetching studens from DB",
  async () => {
    let docterFetched = await Docter.getAllDocters();
    expect(docterFetched).toBeDefined();
  }
); 

test(
  "Test Creation of new student with a random student id",
  async () => {
    const docterListBefore:Docter[] = await Docter.getAllDocters();
    let docter:Docter = new Docter("John", "Doe", "Engineer", 1000);
    Docter.createNewDocter({docter});
    const docterListAfter:Docter[] = await Docter.getAllDocters();
    expect(docterListAfter).toHaveLength(docterListBefore.length + 1);
  }
);