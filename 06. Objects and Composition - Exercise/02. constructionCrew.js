function constructionCrew(worker) {
    if (worker.dizziness === false) {
        return worker;
    } else {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
        return worker;
    }
}