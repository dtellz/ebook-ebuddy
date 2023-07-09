from langchain.document_loaders import UnstructuredEPubLoader

def loadEpub(file):

    print('Loading EPUB file...')
    epub = UnstructuredEPubLoader(file)
    print('EPUB file loaded.')
    data = epub.load()
    return data


