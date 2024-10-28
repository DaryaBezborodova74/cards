export function FormCreateSet() {
    return (
        <form>
            <label>
                Название набора:
                <input type="text" name="name" />
            </label>
            <label>
                Описание:
                <textarea name="discription" />
            </label>
            <input type="submit" value="Создать сет" />
        </form>
    );
}